import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC destinations</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src = {require('../images/img-9.jpg').default}
                        text="Explore the hidden waterfall deep inside the Amazon jungle"
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem
                        src = {require('../images/img-2.jpg').default}
                        text="Travel through the Islands of Bali in a private Cruise"
                        label='Luxury'
                        path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src = {require('../images/img-3.jpg').default}
                        text="Set Sail in the Atlantic Ocean visiting Uncharted waters"
                        label='Mystery'
                        path='/services'
                        />
                        <CardItem
                        src = {require('../images/img-4.jpg').default}
                        text="Experience football on the Top of the Himilayan Mountains"
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem
                        src = {require('../images/img-8.jpg').default}
                        text="Ride through the Sahara Desert on a guided camel tour"
                        label='Adrenaline'
                        path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
