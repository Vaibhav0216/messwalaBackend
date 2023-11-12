import express from "express";
import Mess from "../Model/MessModel.js";

const router = express.Router();

// Getting All messes..
router.get("/", async (req, res) => {
   try {
     const messes = await Mess.find({});
 
     if (messes.length > 0) {
       return res.status(200).json({
         count: messes.length,
         data: messes
       });
     } else {
       return res.status(404).json({ message: "No messes found" });
     }
   } catch (error) {
     console.error(error.message);
     return res.status(500).json({ message: "Internal server error" });
   }
 });
 
// Getting single mess ...

router.get('/:id', async (req, res) => {
    try {
       const messId = req.params.id;
       
       const mess = await Mess.findById(messId);
       
       if (!mess) {
          return res.status(404).json({ message: 'Mess not found' });
       }
       
       return res.status(200).json(mess);
    } catch (error) {
       console.error(error);
       return res.status(500).json({ message: error.message });
    }
 });
 
 // Adding mess..

router.post('/',async(req,res)=>{
   try{
       const {name,price,rating,photos} = req.body;
       const newMess = new Mess ({
         name,
         price,
         rating,
         photos
       })
        const mess = await Mess.create(newMess);
        return res.status(200).json(mess);
   }catch(error){
        console.log(error.message);
        return res.status(500).send({message:error.message});
   }
})

router.put('/:id', async (req, res) => {
    try {
       const messId = req.params.id;
       const updatedMessData = req.body;
       
       // Use findOneAndUpdate or findByIdAndUpdate to update the mess
       const updatedMess = await Mess.findByIdAndUpdate(messId, updatedMessData);
       
       if (!updatedMess) {
          return res.status(404).json({ message: 'Mess not found' });
       }
       
       return res.status(200).json(updatedMess);
    } catch (error) {
       console.error(error);
       return res.status(500).json({ message: error.message });
    }
 });

 router.delete('/:id', async (req, res) => {
    try {
       const messId = req.params.id;
       
       // Use findByIdAndDelete to delete the mess
       const deletedMess = await Mess.findByIdAndDelete(messId);
       
       if (!deletedMess) {
          return res.status(404).json({ message: 'Mess not found' });
       }
       
       return res.status(204).end(); // Use 204 (No Content) for a successful deletion with no response body
    } catch (error) {
       console.error(error);
       return res.status(500).json({ message: error.message });
    }
 });

export default router;