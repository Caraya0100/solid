"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orderFetcher = async (order) => {
    try {
        const response = await fetch(process.env.ERP_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
};
exports.default = orderFetcher;
