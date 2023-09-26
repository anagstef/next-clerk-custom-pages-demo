'use client';

import { UserButton, UserProfile } from "@clerk/nextjs";
import { ColorThemePage } from "../../components/ColorThemePage";
import { TermsPage } from "../../components/TermsPage";
import { StylePage } from "@/app/components/StylePage";
import { Icon } from "@/app/components/Icon";

const pages = [
    <UserProfile.Page key='1' label='Terms' url='terms' labelIcon={<span>📝</span>}>
        <TermsPage />
    </UserProfile.Page>,
    <UserProfile.Page key='2' label='Color Theme' url='theme' labelIcon={<span>🎨</span>}>
        <ColorThemePage />
    </UserProfile.Page>,
    <UserProfile.Page key='3' label='<- Themed Icon' url='style' labelIcon={<Icon />}>
        <StylePage />
    </UserProfile.Page>,
    <UserProfile.Link key='4' label="Other Page" url="other" labelIcon={<span>🔙</span>} />
];


export const UserProfileComponents = () => {
    return (
        <div style={{border: '1px solid black', margin: '50px'}}>
            <div>User Profile Component</div>
            <UserButton>
                {pages}
            </UserButton>
            <UserProfile path="/user" routing="path">
                {pages}
            </UserProfile>
        </div>
      );
};