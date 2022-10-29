const listModel = require('../model/listModel')
const {json} = require("express");
const mongoose = require("mongoose");

module.exports = {
    list: (req, res) => {
        listModel.find().then(result => {
            res.send(result)
        })
    },
    add: (req, res) => {
        let {city, singleCustomer, totalCustomer, totalStream, month5G, month5GVal, daily5G, daily5GVal} = req.body.data
        listModel.create({
            city: city,
            singleCustomer: singleCustomer,
            totalCustomer: totalCustomer,
            totalStream: totalStream,
            month5G: month5G,
            month5GVal: month5GVal,
            daily5G: daily5G,
            daily5GVal: daily5GVal
        }, (err, doc) => {
            if (err) throw err
        })
    },
    delete: (req, res) => {
        console.log(req.body.data._id)
        listModel.findByIdAndRemove({_id: req.body.data._id}, (err, docs) => {
            if (err) throw err
            res.send({msg: '删除成功'})
        })
    },
    update:(req,res)=>{
        let {_id,city, singleCustomer, totalCustomer, totalStream, month5G, month5GVal, daily5G, daily5GVal} = req.body.data
        listModel.findOneAndUpdate({_id:_id},{
            city: city,
            singleCustomer: singleCustomer,
            totalCustomer: totalCustomer,
            totalStream: totalStream,
            month5G: month5G,
            month5GVal: month5GVal,
            daily5G: daily5G,
            daily5GVal: daily5GVal
        },(err,doc)=>{
            if(err) throw err
            console.log(doc)
        })
    },
    search:(req,res)=>{
        console.log(req.body.data)
        listModel.find({city:req.body.data},(err,doc)=>{
            if(err)throw err
            if(doc!==null)
            res.send(doc)
        })
    }
}