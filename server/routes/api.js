const express = require('express')
const router = express.Router()
const req = require('request')



// Set up a get route called /recipes that receives a food parameter


router.get(`/recipes/`, function (request, response) {
    recipeArr = []
    let recipe = request.params.food
    
    {
        req('http://www.recipepuppy.com/api/?&q=${text}', function (err, result) {
            console.log(team, teamID)
            console.log(request)
            createTeam(body.league.standard, teamID)
            console.log(teamArr)
            response.send(teamArr)
        })
    }
})



module.exports = router