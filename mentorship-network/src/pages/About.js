import "./About.css";
export default function About() {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-8 mx-auto text-center">
                    <h2 className="display-4 mb-3">About Us</h2>
                    <p className="lead">
                        This platform is dedicated to empowering individuals in Tamil Nadu
                        who may not have had the financial means to pursue education. It
                        aims to create localized connections, unlike platforms such as Quora
                        or LinkedIn, which are primarily targeted towards English-speaking
                        audiences or those with higher levels of education.
                    </p>
                    <p>
                        We believe that there are countless talented individuals in Tamil
                        Nadu who have risen from humble beginnings to achieve greatness,
                        whether as doctors, engineers, entrepreneurs, or skilled
                        professionals like electricians. However, many of these individuals
                        remain unknown in their local communities. Our app seeks to address
                        this issue by connecting people and showcasing the stories of
                        individuals who have transformed their lives.
                    </p>
                    <p>
                        In the future, we hope that this platform will inspire others to
                        pursue their dreams and realize their potential. As a final
                        thought, we leave you with a verse from the Tamil Thirukural:
                    </p>
                    <blockquote className="blockquote">
                        <p className="mb-0">
                            அறிவற்றங் காக்குங் கருவி செறுவார்க்கும் <br />
                            உள்ளழிக்க லாகா அரண்.
                        </p>
                        <footer className="blockquote-footer">
                            <cite title="Source">Tamil Thirukural</cite>
                        </footer>
                    </blockquote>
                    <p className="lead">
                        "Wisdom is a weapon to ward off destruction; it is an inner fortress
                        which enemies cannot destroy."
                    </p>
                </div>
            </div>
        </div>
    )
}