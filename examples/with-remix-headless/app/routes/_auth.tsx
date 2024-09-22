import { Outlet } from "@remix-run/react";
import { LoaderArgs, redirect } from "@remix-run/node";

import { authProvider } from "~/authProvider";

export default function AuthLayout() {
    return <Outlet />;
}

/**
 * If the current session is authenticated, we're redirecting the user to the home page.
 * Alternatively, we could also use the `Authenticated` component inside the `AuthLayout` to handle the redirect.
 * But, server-side redirects are more performant.
 */
export async function loader({ request }: LoaderArgs) {
    const { authenticated, redirectTo } = await authProvider.check(request);

    if (authenticated) {
        throw redirect(redirectTo ?? "/");
    }

    return {};
}
