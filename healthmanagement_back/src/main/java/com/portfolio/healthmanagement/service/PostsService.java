package com.portfolio.healthmanagement.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.portfolio.healthmanagement.dto.posts.RegisterPostsReqDto;
import com.portfolio.healthmanagement.entity.PostsImg;

public interface PostsService {
	
	public int registerPosts(RegisterPostsReqDto registerPostsRespDto);
	public List<PostsImg> uploadFile(int postsId, List<MultipartFile> files);
}
