const knex = require("./knex");
const moment = require('moment');

function addGoal(goal){
    // console.log("about to add Goal", goal )
    return knex("goals").insert(goal)
};

function getAllGoals(){
    return knex("goals").select("*")
};

function deleteGoal(id){
    return knex("goals").where("id", id).del();
};

function updateGoal(id, goal, desc, reason, targetDate, completedDate){
    return knex("goals").where("id", id).update({
        goalname:goal,
        goal_description:desc,
        goal_reason:reason,
        goalTargetDate:targetDate,
        goalCompletedDate:completedDate
    });
};

module.exports = {
    addGoal,
    getAllGoals,
    deleteGoal,
    updateGoal

}