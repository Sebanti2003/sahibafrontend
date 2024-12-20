import React from 'react'

const Introduction = () => {
    const [more, setMore] = React.useState(false);
    return (
        <div className={`flex p-2 mt-1 flex-col ${more ? "line-clamp-none" : "line-clamp-3"}`}>
            <div>
                Mytalorzone By Sahiba is more than just a clothing brand—it&apos;s a celebration of individuality and self-expression. Designed with love and care, our collection brings together creative, unique, and diverse styles for girls who want to feel beautiful, confident, and truly themselves.

                Whether it’s the timeless elegance of traditional attire, the effortless charm of trendy outfits, or the bold appeal of western styles, every piece is crafted to make you shine, no matter the occasion. At Mytalorzone By Sahiba, we believe in creating clothing that isn’t just beautiful but also carries warmth, thoughtfulness, and a touch of magic.

                We’re here to embrace every girl’s unique journey, offering pieces that resonate with her personality and bring joy to her wardrobe. With a focus on quality, comfort, and inclusivity, we pour our hearts into every design, ensuring you feel as special as you truly are. Let Mytalorzone By Sahiba be your partner in celebrating life’s little and big moments—with style, grace, and lots of love.
            </div>
            <button className='text-red-800 self-end' onClick={() => setMore(!more)}>{more ? "Read less" : "Read more"}</button>
        </div>

    )
}

export default Introduction
