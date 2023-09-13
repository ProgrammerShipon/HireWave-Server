import { paymentCollection } from "../collections/collection";

const postPartnersData = async (req, res) => {
    try {
        const newPartners = req.body;
        console.log('newPartners', newPartners)
        const result = await paymentCollection.insertMany(newPartners);
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}