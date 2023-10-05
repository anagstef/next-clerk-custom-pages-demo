'use client';

import { OrganizationProfile, OrganizationSwitcher } from "@clerk/nextjs";
import { ColorThemePage } from "../../components/ColorThemePage";
import { TermsPage } from "../../components/TermsPage";
import { StylePage } from "@/app/components/StylePage";
import { Icon } from "@/app/components/Icon";

const pages = [
    <OrganizationProfile.Page key='1' label='Terms' url='terms' labelIcon={<span>📝</span>}>
        <TermsPage />
    </OrganizationProfile.Page>,
    <OrganizationProfile.Page key='2' label='Color Theme' url='theme' labelIcon={<span>🎨</span>}>
        <ColorThemePage />
    </OrganizationProfile.Page>,
    <OrganizationProfile.Page key='3' label='<- Themed Icon' url='style' labelIcon={<Icon />}>
        <StylePage />
    </OrganizationProfile.Page>,
    <OrganizationProfile.Link key='4' label="Other Page" url="other" labelIcon={<span>🔗</span>} />,
    <OrganizationProfile.Link key='5' label="Home" url="/" labelIcon={<span>🔙</span>} />
];


export const OrgProfileComponents = () => {
    return (
        <div style={{border: '1px solid black', margin: '50px'}}>
            <div>Organization Profile with Path Router</div>
            <OrganizationSwitcher>
                {pages}
            </OrganizationSwitcher>
            <OrganizationProfile path="/organization" routing="path">
                {pages}
            </OrganizationProfile>
        </div>
      );
};