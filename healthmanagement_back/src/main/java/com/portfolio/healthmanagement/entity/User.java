package com.portfolio.healthmanagement.entity;


import java.sql.Date;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
	
	private int userId;
	private String username;
	private String password;
	private String name;
	private String phone;
	private String email;
	private int weight;
	private int height;
	private Date birthdate;
	private int businessOwner;
	
	private List<Authority> authorities;
	
}
