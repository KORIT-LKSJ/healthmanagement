package com.portfolio.healthmanagement.security;

import java.security.Key;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import com.portfolio.healthmanagement.dto.response.JwtRespDto;
import com.portfolio.healthmanagement.exception.CustomException;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class JwtTokenProvider {

	private final Key key;
	
	public JwtTokenProvider(@Value("${jwt.secretKey}") String secretKey) {
		byte[] keyBytes = Decoders.BASE64.decode(secretKey);
		this.key = Keys.hmacShaKeyFor(keyBytes);
	}	
	
	public JwtRespDto createToken(Authentication authentication) {
		System.out.println(authentication);
		StringBuilder  stringBuilder = new StringBuilder();
		
		authentication.getAuthorities().forEach(authority -> {
			stringBuilder.append(authority.getAuthority() + ",");
		});
		
		stringBuilder.delete(stringBuilder.length() -1, stringBuilder.length());
		
		String authorities  = stringBuilder.toString();
		
		Date tokenExpiresDate = new Date(new Date().getTime() + (1000 * 60 * 60 * 24)); // 토큰 만료시간 설정
		
		System.out.println(authentication.getName());
		
		String accesstoken = Jwts.builder()
				.setSubject(authentication.getName())
				.claim("auth", authorities)
				.setExpiration(tokenExpiresDate) // 토큰 만료시간 
				.signWith(key, SignatureAlgorithm.HS256)  //토큰 암호화
				.compact();
	
		return JwtRespDto.builder().granType("Bearer").accessToken(accesstoken).build();
	}
	
	public boolean vaildateToken(String token) {
		try {
			
			Jwts.parserBuilder()
				.setSigningKey(key)
				.build()
				.parseClaimsJws(token);
			
			return true;
			
		}catch (SecurityException | MalformedJwtException e) {
//			log.info("Incalid Jwt token", e);
		}catch(ExpiredJwtException e) {
//			log.info("Expired Jwt token", e);
		}catch(UnsupportedJwtException e) {
//			log.info("Unsupported Jwt token", e);
		}catch(IllegalArgumentException e) {
//			log.info("IllegalArgument jWt token", e);
		}catch (Exception e) {
			log.info("Jwt token error", e);
		}
		return false;
	}
	
	public String getToken(String token) {
		String type = "Bearer";
		if(StringUtils.hasText(token) && token.startsWith(type)) {
			return token.substring(type.length() + 1);
		}
		return null;
	}
	
	public Claims getClaims(String token) {
		return Jwts.parserBuilder()
				.setSigningKey(key)
				.build()
				.parseClaimsJws(token)
				.getBody();
	}
	
	public Authentication getAuthentication(String accessToken) {
		Authentication authentication = null;
		
		Claims claims = getClaims(accessToken);
		if(claims.get("auth") == null) {
			throw new CustomException("Access Token에 권한 정보가 없습니다.");
		}
		
		List<SimpleGrantedAuthority> authorities = new ArrayList<>();
		
		String auth = claims.get("auth").toString();
		for(String role : auth.split(",")) {
			authorities.add(new SimpleGrantedAuthority(role));
		}
		
		UserDetails userDetails = new User(claims.getSubject(),"",authorities);
		
		authentication = new UsernamePasswordAuthenticationToken(userDetails, null, authorities);
		return authentication;
	}
	
	
	
	
	
	
	
	
	
	
}
