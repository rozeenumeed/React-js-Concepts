
import React from 'react'
import Card from './card'

const Right = () => {

  const cardData = [
    {
        image:"https://i.pinimg.com/736x/51/31/7f/51317f69bd2a3e1caa851be4bdf72b34.jpg",
      No: 1,
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        image:"https://i.pinimg.com/736x/e3/f6/af/e3f6af9f3c35ed70e814d3d86390921e.jpg",
      No: 2,
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        image:"https://i.pinimg.com/736x/ad/c0/e6/adc0e6bda773b53d280436a1593315ce.jpg",
      No: 3,
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]

  return (
    <div className="flex-1 p-4 h-full bg-gray-100 rounded-lg shadow-md w-2/3 flex gap-2 bg-gray-200">
      {cardData.map(function(element, index) {
        return (
          <div key={index}>
            <Card
            image={element.image}
              No={element.No}
              paragraph={element.paragraph}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Right
