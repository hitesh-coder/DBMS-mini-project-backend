const Profile = require('../models/userProfile')

module.exports.update_user = async (req, res) => {
    const data = req.body;
    console.log(req.body)
    try {
        const updatedProfile = await Profile.findOneAndUpdate(
            { email: data.email },
            { $set: { name: data.name, registrationNumber: data.registrationNumber, academicYear: data.academicYear, semester: data.semester, program: data.program } },
            { upsert: true, returnOriginal: false }
        );
        res.status(200).json(updatedProfile);
    } catch (err) {
        res.status(400).json({ err });
    }
}