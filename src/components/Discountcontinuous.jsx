// imp// import React from 'react'
import { motion } from "framer-motion";

const Discountcontinuous = () => {
    return (
        <div className="flex continuetext gap-7 items-center overflow-x-hidden">
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                className="continuetext text-sm text-white py-2 font-[anzo] tracking-wider flex flex-shrink-0 justify-around items-center font-bold"
            >
                <div className="mx-4">SALE-UPTO 80% OFF + EXTRA 20% OFF ON PREPAID ORDERS</div>
                <div className="mx-4">SALE-UPTO 80% OFF + EXTRA 20% OFF ON PREPAID ORDERS</div>
                <div className="mx-4">SALE-UPTO 80% OFF + EXTRA 20% OFF ON PREPAID ORDERS</div>
            </motion.div>
            <motion.div
                initial={{ x: 0 }} // Start off-screen to the right
                animate={{ x: "-100%" }}       // Enter the screen
                transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                className="continuetext text-sm text-white py-2 font-[anzo] tracking-wider flex flex-shrink-0 justify-around items-center font-bold"
            >
                <div className="mx-4">SALE-UPTO 80% OFF + EXTRA 20% OFF ON PREPAID ORDERS</div>
                <div className="mx-4">SALE-UPTO 80% OFF + EXTRA 20% OFF ON PREPAID ORDERS</div>
                <div className="mx-4">SALE-UPTO 80% OFF + EXTRA 20% OFF ON PREPAID ORDERS</div>
            </motion.div>
        </div>
    );
};

export default Discountcontinuous;
