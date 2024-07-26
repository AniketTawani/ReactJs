import { Client, Databases, Storage, Query } from "appwrite";
import conf from "../conf/conf";
import { nanoid } from "@reduxjs/toolkit";

export class Service{
    client = new Client();
    database;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.database = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.database.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            throw error;
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.database.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                   title,
                   content,
                   featuredImage,
                   status 
                }
            )
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug){
        try {
            return await this.database.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            throw error
        }
    }

    async getPost(slug){
        try {
            return await this.database.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            throw error;
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try {
           return await this.database.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            queries
           ) 
        } catch (error) {
            throw error
        }
    }

    // File Upload Services

    async uploadFile(file){
        try {
            return await this.bucket.createDocument(
                conf.appwriteBuckedId,
                nanoid(),
                file
            )
        } catch (error) {
            throw error;
        }
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBuckedId,
                fileId
            )
        } catch (error) {
            throw error;
        }
    }

    async getFilePreview(fileId){
        try {
            return await this.bucket.getFilePreview(
                conf.appwriteBuckedId,
                fileId
            )
        } catch (error) {
            throw error;
        }
    }

}

const service = new Service();
export default service;