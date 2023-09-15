'use client';

import { ColorThemePage } from "@/app/components/ColorThemePage";
import { TermsPage } from "@/app/components/TermsPage";
import { UserProfile, UserProfileLink, UserProfilePage } from "@clerk/nextjs";

export const UserProfilePageReorderedHashRouter = () => {
    return (
        <div style={{border: '1px solid black', margin: '50px'}}>
            <div>User Profile Component</div>
            <UserProfile>
                <UserProfilePage label='Color Theme' url='theme' labelIcon={<span>🎨</span>}>
                    <ColorThemePage />
                </UserProfilePage>
                <UserProfilePage label="account" />
                <UserProfilePage label="security" />
                <UserProfilePage label='Terms' url='terms' labelIcon={<span>📝</span>}>
                    <TermsPage />
                </UserProfilePage>
                <UserProfileLink label="Go Back" url="/" labelIcon={<span>🔙</span>} />
            </UserProfile>
        </div>
      );
};