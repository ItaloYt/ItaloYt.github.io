import "../../app/profile.css";

export default function ProfileRadialGradient() {
    return (
        <svg className="profile-rect">
            < defs >
                <radialGradient id="RadialGradient" r="200%">
                    <stop offset="0%" className="profile-gradient-center-color"></stop>
                    <stop offset="100%" className="profile-gradient-outer-color"></stop>
                </radialGradient>
            </defs >

            <rect></rect>
        </svg >
    )
}