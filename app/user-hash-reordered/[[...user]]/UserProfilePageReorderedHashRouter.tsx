'use client';

import { ColorThemePage } from "@/app/components/ColorThemePage";
import { TermsPage } from "@/app/components/TermsPage";
import { UserProfile } from "@clerk/nextjs";

export const UserProfilePageReorderedHashRouter = () => {
    return (
        <div style={{border: '1px solid black', margin: '50px'}}>
            <div>User Profile Reordered with Hash Router</div>
            <UserProfile>
                <UserProfile.Page label='Color Theme' url='theme' labelIcon={<span>🎨</span>}>
                    <ColorThemePage />
                </UserProfile.Page>
                <UserProfile.Page label="account" />
                <UserProfile.Page label="security" />
                <UserProfile.Page label='Terms' url='terms' labelIcon={<span>📝</span>}>
                    <TermsPage />
                </UserProfile.Page>
                <UserProfile.Link label="Go Back" url="/" labelIcon={<span>🔙</span>} />
            </UserProfile>
        </div>
      );
};