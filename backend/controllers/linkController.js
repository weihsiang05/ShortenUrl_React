const shortUrl = require('../modles/linkModel')
const shorterURL = require('../public/javascripts/shorter_Url')

const createUrl = async (req, res) => {
  const originalLink = req.body
  let shorterLink = shorterURL.link(originalLink)

  try {
    const findUrl = await shortUrl.findOne({ fullLink: originalLink.links })
    if (!findUrl) {
      console.log(originalLink)
      const createUrl = await shortUrl.create({ fullLink: originalLink.links, newLink: shorterLink })
      res.status(200).json(createUrl)
    } else {
      res.status(200).json(findUrl)
    }

  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const findUrl = async (req, res) => {
  const randomLetter = req.body.randomLetter
  const fixLink = "http://localhost:3000/"
  const newLink = fixLink + randomLetter

  console.log(randomLetter)
  console.log(newLink)
  try {

    const findNewLink = await shortUrl.findOne({ newLink: newLink })
    //console.log(findNewLink.fullLink)
    if (findNewLink) {
      res.status(200).json(findNewLink.fullLink)
    } else {
      res.status(200).json("Can not find the newLink!")
    }

  } catch (error) {
    res.status(400).json({ error: error.message })
  }

}

module.exports = {
  createUrl, findUrl
}