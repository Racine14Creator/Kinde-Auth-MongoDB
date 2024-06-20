import User from "@/models/User.model";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function DashboardLayout({ children }) {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isLoggenIn = await isAuthenticated();
  const user = await getUser();

  if (user) {
    // Check if the User exist
    const userExist = User.findOne({ email: user?.email });
    if (userExist) {
      console.log("Welcome user: " + user?.email);
    } else {
      const userRegistered = await User.create({
        email: user?.email,
        name: user?.family_name,
        given_name: user?.given_name,
        profile: user?.picture,
        userId: user?.userId,
      });
      if (userRegistered) {
        console.log(userRegistered);
      }
    }
  }
  return (
    <div className='container max-w-[1024px] mx-auto border-r border-l'>
      {children}
    </div>
  );
}
