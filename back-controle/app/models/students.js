module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
           name:{
           type:String,
           require : true,
                   
           },
        email:{
            type : String,
            require : true,
            unique : true,
        }, 

        password:{
           type :String, 
           require : true,
        },       
     });
schema.method("toJSON", function(){
    const {__v,_id, ...object} = this.toObject();

    object.id = _id;
    return object;
});
const Students = mongoose.model("students", schema);
return Students;

};
