const Joi= require('joi')
    const addCelebalRolesSchema = Joi.object({
        adminEmail:Joi.string().email().required().regex(/@celebaltech\.com$/),
        fullName:Joi.string().min(3).max(255).required(),
        role:Joi.string().required(),
        hrmid:Joi.number().max(9999).required(),
        domain:Joi.string(),
        collegeId:Joi.number()
      });
      const deleteRolesSchema = Joi.object({
        roleId: Joi.number().required(),
        isCelebal: Joi.boolean().required(),
      });
      const addCollegeMentorSchema = Joi.object({
        mentorEmailId:Joi.string().email().required(),
        fullName:Joi.string().min(3).max(255).required(),
        role:Joi.string().required(),
        collegeId:Joi.number().required(),
        domain:Joi.string().required()
      });
      const uploadCourseExcelSchema = Joi.object({
        complexity: Joi.string().min(5).max(13).required(),
        sequence:Joi.number().required(),
        learning_path:Joi.string().required()
        
      });
      const addCollegesSchema = Joi.object({
         collegeName:  Joi.string().required(),
         TPO_name: Joi.string().required(),
         TPO_contactNo: Joi.number().required(),
         TPO_emailId: Joi.string().email().required(),
         address  : Joi.string().required(),
         startDate  : Joi.date().required(),
         endDate  :  Joi.date().required()
      });
      
      const add_lpSchema = Joi.object({
     lp_name:Joi.string().required(),
     domain:Joi.string().required(),
     technology:Joi.string().required()
      });


      module.exports={addCelebalRolesSchema,deleteRolesSchema,addCollegeMentorSchema,uploadCourseExcelSchema,addCollegesSchema,add_lpSchema}