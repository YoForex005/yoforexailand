import Hero from '../Hero'
import Features from '../Features'
import Pricing from '../Pricing'
import HowItWorks from '../HowItWorks';
import WhyChooseUs from '../WhyChooseUs';
import StartTrading from '../StartTrading';

function Home() {
    return (
        <>
            <Hero />
            <HowItWorks />
            <Features />
            <WhyChooseUs />
            <StartTrading />
            <Pricing />
        </>
    )
}

export default Home;