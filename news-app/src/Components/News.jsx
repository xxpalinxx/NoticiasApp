import React, { useEffect, useState } from 'react'
import techImg from '../assets/images/tech.jpg'
import worldImg from '../assets/images/world.jpg'
import sportsImg from '../assets/images/sports.jpg'
import scienceImg from '../assets/images/science.jpg'
import healthImg from '../assets/images/health.jpg'
import entertainmentImg from '../assets/images/entertainment.jpg'
import nationImg from '../assets/images/nation.jpg'
import noImg from '../assets/images/no-img.png'
import './News.css'
import axios from 'axios'
import NewsModal from './NewsModal'

const categories = ['general', 'world', 'business', 'technology', 'entertainment', 'sports', 'science', 'health', 'nation']

const News = () => {
    const [headline, setHeadline] = useState(null)
    const [news, setNews] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('general')
    const [showModal, setShowModal] = useState(false)
    const [selectedArticle, setSelectedArticle] = useState(null)

    useEffect(()=>{
        const fecthNews = async () => {
            const url = `https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&apikey=f90bfbfa89586200b5e120b85e62c972&lang=en`
            const response = await axios.get(url)
            const fecthedNews = response.data.articles

            fecthedNews.forEach((article) => {
                if(!article.image) {
                    article.image = noImg
                }
            });

            setHeadline(fecthedNews[0])
            setNews(fecthedNews.slice(1, 7))

            /* console.log(fecthedNews[0])
            console.log(fecthedNews.slice(1, 7))
            console.log(news) */
        }

        fecthNews()
    },[selectedCategory])

    c