export function LoginSuccessNavigateTo(user_role, navigate) {
    console.log(user_role, "user_role")
    switch (user_role) {
        case "interview_candidate":
            navigate("/candidates_home");
            break;

        case "admin":
            navigate("/dashboard/home");
            break;

        default:
            break;
    }
}