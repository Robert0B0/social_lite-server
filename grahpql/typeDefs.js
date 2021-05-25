const { gql } = require("apollo-server");

module.exports = gql`
	type Post {
		id: ID!
		body: String!
		createdAt: String!
		username: String!
		tags: [String]
		comments: [Comment]!
		likes: [Like]!
		likeCount: Int!
		commentCount: Int!
	}
	type Comment {
		id: ID!
		createdAt: String!
		username: String!
		body: String!
	}
	type Tag {
		id: ID!
		body: String!
		createdAt: String!
	}
	type Like {
		id: ID!
		createdAt: String!
		username: String!
	}
	type User {
		id: ID!
		email: String!
		token: String!
		username: String!
		password: String!
		imageUrl: String
		createdAt: String!
	}
	input RegisterInput {
		username: String!
		password: String!
		confirmPassword: String!
		email: String!
	}
	type Query {
		getPosts: [Post]
		getPost(postId: ID!): Post
		getUserPosts(userName: String!): [Post]
		getUsers: [User]
		getUser(userId: ID!): User!
		getUserPic(username: String!): String
		getSearchPosts(content: String!): [Post]
	}
	type Mutation {
		register(registerInput: RegisterInput): User!
		login(username: String!, password: String!): User!
		modifyUser(userId: String!, new_imageUrl: String, new_email: String!): User!
		createPost(body: String!): Post!
		deletePost(postId: ID!): String!
		createComment(postId: ID!, body: String!): Post!
		deleteComment(postId: ID!, commentId: ID!): Post!
		likePost(postId: ID!): Post!
	}
	type Subscription {
		newPost: Post!
	}
`;
