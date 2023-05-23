package com.portfolio.healthmanagement.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.portfolio.healthmanagement.entity.Posts;
import com.portfolio.healthmanagement.entity.PostsImg;

@Mapper
public interface PostsRepository {

	public int registerPosts(Posts posts);
	public int registerPostsImgs(List<PostsImg> postsImg);
	
}
