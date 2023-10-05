'use client';

import { OrganizationProfile } from "@clerk/nextjs";
import { ColorThemePage } from "../../components/ColorThemePage";
import { TermsPage } from "../../components/TermsPage";


export const OrganizationProfilePageReordered = () => {
    return (
        <div style={{border: '1px solid black', margin: '50px'}}>
            <div>Organization Profile Reordered with Path Router</div>
            <OrganizationProfile path="/organization-reordered" routing="path">
                <OrganizationProfile.Page label='Color Theme' url='theme' labelIcon={<span>🎨</span>}>
                    <ColorThemePage />
                </OrganizationProfile.Page>
                <OrganizationProfile.Page label="settings" />
                <OrganizationProfile.Page label="members" />
                <OrganizationProfile.Page label='Terms' url='terms' labelIcon={<span>📝</span>}>
                    <TermsPage />
                </OrganizationProfile.Page>
                <OrganizationProfile.Link label="Go Back" url="/" labelIcon={<span>🔙</span>} />
            </OrganizationProfile>
        </div>
      );
};