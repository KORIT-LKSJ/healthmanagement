package com.portfolio.healthmanagement.dto.posts;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.portfolio.healthmanagement.entity.Posts;

import lombok.Data;


@Data
public class RegisterPostsReqDto {
	private int userId;
	private List<MultipartFile> imgFiles;
	
	public Posts toEntity() {
		return Posts.builder()
				.userId(userId)
				.build();
	}
}
