import "./About.css";
export default function About() {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-8 mx-auto text-center">
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