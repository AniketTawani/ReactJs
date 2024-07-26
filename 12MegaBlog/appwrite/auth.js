import { Client, Account } from "appwrite";
import { nanoid } from "@reduxjs/toolkit";
import conf from "../conf/conf";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(nanoid(),email,password,name);
            if(userAccount){
                // if the userAccount is made then do login also to that particular user.
                return this.login({email,password});
            }else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try {
           return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error
        }

    }

    async logout(){
        try {
            return await this.account.deleteSessions();      
        } catch (error) {
            throw error;
        }
    }

}

const authService = new AuthService();
export default authService;