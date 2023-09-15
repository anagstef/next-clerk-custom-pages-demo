'use client';

import { UserProfile, UserProfilePage, UserProfileLink } from "@clerk/nextjs";
import { ColorThemePage } from "../../components/ColorThemePage";
import { TermsPage } from "../../components/TermsPage";

export const UserProfileComponents = () => {
    return (
        <div style={{border: '1px solid black', margin: '50px'}}>
            <div>User Profile Component</div>
            <UserProfile path="/user" routing="path">
                <UserProfilePage label='Terms' url='terms' labelIcon={<span>📝</span>}>
                    <TermsPage />
                </UserProfilePage>
                <UserProfilePage label='Color Theme' url='theme' labelIcon={<span>🎨</span>}>
                    <ColorThemePage />
                </UserProfilePage>
                <UserProfileLink label="Go Back" url="/" labelIcon={<span>🔙</span>} />
            </UserProfile>
        </div>
      );
};