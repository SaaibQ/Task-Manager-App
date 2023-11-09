const notFound = (req, res) => res.status(404).send(`Such route does't exsist`);

module.exports = notFound;
