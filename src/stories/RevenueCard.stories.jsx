import { RevenueCard } from "../components/RevenueCard";

export default{
    title: 'Revenue Card',
    component: RevenueCard,
    parameters: {
        layout: 'centered',
        tags: ['autodocs'],
    }
}

export const Revenue = {
    args: {
        title: 'Amount Pending',
        orderCount: 13,
        amount: '10000',
    }
}