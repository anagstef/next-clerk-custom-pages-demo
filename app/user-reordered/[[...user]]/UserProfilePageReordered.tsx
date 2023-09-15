'use client';

import { UserProfile, UserProfilePage, UserProfileLink } from "@clerk/nextjs";
import { ColorThemePage } from "../../components/ColorThemePage";
import { TermsPage } from "../../components/TermsPage";

const Test = () => {
    return (
        <div>Test</div>
    );
}
Test.displayName = 'Test';

export const UserProfilePageReordered = () => {
    return (
        <div style={{border: '1px solid black', margin: '50px'}}>
            <div>User Profile Component</div>
            <UserProfile path="/user-reordered" routing="path">
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