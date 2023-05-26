//package com.portfolio.healthmanagement.controller;
//
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.portfolio.healthmanagement.dto.posts.RegisterPostsReqDto;
//import com.portfolio.healthmanagement.service.PostsServiceImpl;
//
//import lombok.RequiredArgsConstructor;
//
//@RestController
//@RequiredArgsConstructor
//public class PostController {
//	
//	private final PostsServiceImpl  postsService;
//	
//	@PostMapping("/post/register")
//	public ResponseEntity<?> register(RegisterPostsReqDto registerPostsReqDto) {
//
//		return ResponseEntity.ok(postsService.registerPosts(registerPostsReqDto));
//	}
//}
