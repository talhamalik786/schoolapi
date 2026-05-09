const pool = require("../config/db.js")
const {getDistance} = require("../utils/distanceCalc")


const schooladd = async (req, res) => {
    const {name, address, latitude, longitude} = req.body

    if (!name || typeof name !== "string" || name.trim() === ""){
        res.status(400).json({error:"name must be present in the body and be a non-empty string"})
        return
    }
    if (!address || typeof address !== "string" || address.trim() === ""){
        res.status(400).json({error:"address must be present in the body and be a non-empty string"})
        return
    }
    if (!latitude || isNaN(Number(latitude))){
        res.status(400).json({error:"latitude must be present in the body and be a floating-point number"})
        return
    }
    if (!longitude || isNaN(Number(longitude))){
        res.status(400).json({error:"longitude must be present in the body and be a floating-point number"})
        return
    }

    const lat = Number(latitude)
    const long = Number(longitude)

    if (lat > 90 || lat < -90){
        res.status(400).json({error:"latitude must be between -90 and 90"})
        return
    }
    if (long > 180 || long < -180){
        res.status(400).json({error:"longitude must be between -180 and 180"})
        return
    }

    const insertSchoolQuery = `
        INSERT INTO schools (name, address, latitude, longitude) 
        VALUES (?, ?, ?, ?)
    `
    try {
        await pool.query(insertSchoolQuery, [name, address, lat, long])
        res.status(201).json({message: "School added successfully"})
    } catch (error) {
        console.error("Error adding school:", error)
        res.status(500).json({error: "Internal server error"})
    }
}

const schoollist = async (req, res) => {
    const {latitude, longitude} = req.query

    if (latitude > 90 || latitude < -90){
        res.status(400).json({error:"latitude must be between -90 and 90"})
        return
    }
    if (longitude > 180 || longitude < -180){
        res.status(400).json({error:"longitude must be between -180 and 180"})
        return
    }

    const getSchoolsQuery = `SELECT * FROM schools`

    try {
        const [schools] = await pool.query(getSchoolsQuery)
        const data = schools.map((school)=>(
            {...school, distance: getDistance(latitude, longitude, school.latitude, school.longitude)}
        )).sort((a,b)=>(a.distance - b.distance))
        res.status(200).json({schools: data})
    } catch (error) {
        console.error("Error fetching schools:", error)
        res.status(500).json({error: "Internal server error"})
    }
}

module.exports = {schooladd,schoollist}


