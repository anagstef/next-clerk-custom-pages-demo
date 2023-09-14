'use client';

import { UserProfile } from "@clerk/nextjs";
import { ColorThemePage } from "../../components/ColorThemePage";
import { TermsPage } from "../../components/TermsPage";

export const UserProfilePage = () => {
    return (
        <div style={{border: '1px solid black', margin: '50px'}}>
            <div>User Profile Component</div>
            <UserProfile path="/user" routing="path">
                <UserProfile.Page label='Terms' url='terms' labelIcon={<span>📝</span>}>
                    <TermsPage />
                </UserProfile.Page>
                <UserProfile.Page label='Color Theme' url='theme' labelIcon={<span>🎨</span>}>
                    <ColorThemePage />
                </UserProfile.Page>
                <UserProfile.Link label="Go Back" url="/" labelIcon={<span>🔙</span>} />
            </UserProfile>
        </div>
      );
};