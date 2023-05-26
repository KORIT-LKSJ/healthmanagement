package com.portfolio.healthmanagement.service;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.portfolio.healthmanagement.dto.posts.RegisterPostsReqDto;
import com.portfolio.healthmanagement.entity.Posts;
import com.portfolio.healthmanagement.entity.PostsImg;
import com.portfolio.healthmanagement.repository.PostsRepository;

import java.io.IOException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PostsServiceImpl implements PostsService{
	@Value("${file.path}")
	private String filePath;
	private final PostsRepository postsRepository;
	
	@Override
	public int registerPosts(RegisterPostsReqDto registerPostsReqDto) {
		List<MultipartFile> files = registerPostsReqDto.getImgFiles();
		List<PostsImg> postsFiles = new ArrayList<>();
		files.forEach(file -> {
			String originFileName = file.getOriginalFilename();
			String extension = originFileName.substring(originFileName.lastIndexOf("."));
			String tempFileName = UUID.randomUUID().toString().replaceAll("-", "") + extension;
			
			Path uploadPath = Paths.get(filePath + "post/" + tempFileName);
			File f = new File(filePath + "post");
			if(!f.exists()) {
				f.mkdir();
			}
			
			postsFiles.add(PostsImg.builder()
					.gymId(registerPostsReqDto.getGymId())
					.originName(file.getOriginalFilename())
					.tempName(tempFileName)
					.imgSize(Long.toString(file.getSize()))
					.build());
		});
		
		
		postsRepository.registerPosts(posts);
		
		uploadFile(posts.getPostsId(), registerPostsReqDto.getImgFiles());
		return postsRepository.registerPostsImgs(uploadFile(posts.getPostsId(), registerPostsReqDto.getImgFiles()));
	}

	@Override
	public List<PostsImg> uploadFile(int postsId, List<MultipartFile> files) {
		if(files == null) {
			return null;
		}
		List<PostsImg> postsFiles = new ArrayList<>();
		files.forEach(file -> {
			String originFileName = file.getOriginalFilename();
			String extension = originFileName.substring(originFileName.lastIndexOf("."));
			String tempFileName = UUID.randomUUID().toString().replaceAll("-", "") + extension;
			
			Path uploadPath = Paths.get(filePath + "post/" + tempFileName);
			
			File f = new File(filePath + "post");
			if(!f.exists()) {
				f.mkdir();
			}
			
			try {
				Files.write(uploadPath, file.getBytes());
			} catch (IOException e) {
				e.printStackTrace();
			}
			
			postsFiles.add(PostsImg.builder()
					.postsId(postsId)
					.originName(file.getOriginalFilename())
					.tempName(tempFileName)
					.imgSize(Long.toString(file.getSize()))
					.build());
		});
		return postsFiles;
	}


}
