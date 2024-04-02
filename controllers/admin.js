const TimeSlot=require('../models/slots');

const bookedSlot=require('../models/bookedSlots');

exports.getSlots = (req, res, next) => {
  TimeSlot.findAll().then((datas)=>{
    const data=datas.map(i=>i.dataValues); 
    console.log(data);
     res.send(data);
  }).catch((err)=>{
    console.log(err);
  });
};


exports.bookedSlot=(req,res,next)=>{
      const name=req.body.name;
      const email=req.body.email;
      const id=req.body.id;
      const t=req.body.time;
      let booked;
      const link = bookedSlot.rawAttributes.link.defaultValue;
      console.log(req.body,name,email,id,t);
      bookedSlot.create({
        name: name,
        email: email,
        time: t
    })
    .then((bookedSlot) => {
      booked=bookedSlot;
      return TimeSlot.findByPk(id);
    }).then((timeSlot)=>{
       if (timeSlot) {
          return timeSlot.decrement('available', { by: 1 });
      } else {
          throw new Error('Time slot not found');
       }
    }).then(()=>{
      console.log("Done");
      booked.dataValues.link=link;
      res.send(booked.dataValues);
    })
    .catch((error) => {
      console.error('Error creating booked slot:', error);
      res.status(500).send('Internal Server Error');
    });
}



exports.getbookedSlots=(req,res,next)=>{
  bookedSlot.findAll().then((datas)=>{
    const data=datas.map(i=>i.dataValues); 
    console.log(data);
     res.send(data);
  }).catch((err)=>{
    console.log(err);
  });
}