import Price from '../Price/Price';

const Pricing = () => {
    const pricingOption =[
        {id:1, name:'Free', price:0, features:[
            'Awesome Features',
            'Extra Features',
            'Fantastic Features',
            "Don't block"
        ]},
        {id:2, name:'Medium', price:9.99, features:[
            'Awesome Features',
            'Extra Features',
            'Fantastic Features',
            "Don't block"
        ]},
        {id:3, name:'Premium', price:19.99, features:[
            'Awesome Features',
            'Extra Features',
            'Fantastic Features',
            "Don't block"
        ]}
    ]
    return (
        <div>
            <h1 className='text-5xl font-black p-4 inline-block mt-4 rounded-2xl'>Pricing List</h1>
            <div className='grid md:grid-cols-3 gap-4'>
            {
                pricingOption.map(price => <Price key={price.id} price= {price} ></Price>)
            }
            </div>
            
        </div>
    );
};

export default Pricing;