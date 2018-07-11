import express from 'express'
import { Truck } from '../models/truck'
const truckRouter = express.Router();

truckRouter.get('/', (req, res) => {
  Truck.find({}, (err, trucks) => {
    if (err) res.send(err)
    res.json(trucks)
  })

});

truckRouter.post('/add', (req, res) => {
  const newTruck = new Truck(req.body)
  newTruck.save((err,product) => {
    if (err) res.send(err)
    res.json(product)
    res.redirect('/trucks/')
  })
  })

truckRouter.get('/:id', (req, res) => {
  let _id = req.params.id;
  Truck.findById({_id}, (err, truck) => {
    if(err) res.send(err)
    res.json(truck)
  })
})

truckRouter.put('/:id', (req, res) => {
  Truck.findById(req.params.id, (err, truck) => {
    if(err) res.send(err)
    truck.name = req.body.name;
    truck.description = req.body.description;
    truck.speciality = req.body.speciality
    truck.save((err) => {
      if(err) res.send(err)
      res.json({message:"foodtruck uploaded"})
    })
  })
})

export { truckRouter }