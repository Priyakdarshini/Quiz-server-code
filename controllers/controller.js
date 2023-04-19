import { questions } from "../models/questionSchema.js"
import { Result } from "../models/resultSchema.js"
import  ques, {answers}  from '../database/data.js'



export async function getQuestions(req,res){
    try{
       const q = await questions.find()
       res.json(q)
    }catch(err){
        res.json({err})
    }
}

export async function insertQuestions(req,res){
    try{
       questions.insertMany({questions:ques, answers:answers})
    }catch(err){
        res.json({err})
    }
}

export async function dropQuestions(req,res){
    try{
       questions.deleteMany()
       res.json({mes : 'question deleted'})
    }catch(err){
        res.json({err})
    }
}

export async function getResult(req,res){
    try{
       res.json({result : 'result'})
    }catch(err){
        res.json({err})
    }
}

export async function storeResult(req,res){
    console.log(req.body)
    try{  const { username, result, attempts, points, achieved } = req.body;
    if (!username && !result) throw new Error("Data not provided...!");
    Result.create({ username, result, attempts, points, achieved });
    res.json({ msg: "Result stored in MongoDB" });

    }catch(err){
        res.json({err})
    }
    console.log("store",)
}

export async function dropResult(req,res){
    try{

    }catch(err){
        res.json({err})
    }
}