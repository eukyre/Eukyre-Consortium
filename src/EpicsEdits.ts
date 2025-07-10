import { WTTInstanceManager } from "./WTTInstanceManager";
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";

export class epicItemClass {

    private Instance: WTTInstanceManager = new WTTInstanceManager(); // Based upon EpicRangeTime's edits. Cheers, epic! --Eukyre

    public preSptLoad(Instance: WTTInstanceManager): void {
        this.Instance = Instance;
    }

    public postDBLoad(): void {

        this.epicEdits();
    }

    public epicEdits(): void {
        const db: IDatabaseTables = this.Instance.database;
        const dbItems = db.templates.items;
        for (let file in dbItems) {
            let fileData = dbItems[file];
            if (fileData._id === "673cbdfad0453ba50c0f76d6") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("68561ab84857b945e0ce85e9", 
                    "6859749fb61f50b920ae5a2a"
                );
            } //Pushing .338LM RIP to Sako M10 Mags
            if (fileData._id === "628120fd5631d45211793c9f") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("68561ab84857b945e0ce85e9", 
                    "6859749fb61f50b920ae5a2a"
                );
            } //Pushing .338LM RIP to AXMC Mags
            if (fileData._id === "5fc23426900b1d5091531e15") {
                fileData._props.Cartridges[0]._props.filters[0].Filter.push("68561ab84857b945e0ce85e9", 
                    "6859749fb61f50b920ae5a2a"
                );
            } //Pushing .338LM RIP to MK-18 Mags
            if (fileData._id === "673cab3e03c6a20581028bc1") {
                fileData._props.Chambers = [
                    {
                        "_name": "patron_in_weapon",
                        "_id": "673cab3e03c6a20581028bc6",
                        "_parent": "673cab3e03c6a20581028bc1",
                        "_props": {
                            "filters": [
                                {
                                    "Filter": [
                                        "5fc382a9d724d907e2077dab",
                                        "5fc275cf85fd526b824a571a",
                                        "5fc382c1016cce60e8341b20",
                                        "5fc382b6d6fa9c00c571bbc3",
                                        "68561ab84857b945e0ce85e9",
                                        "6859749fb61f50b920ae5a2a"
                                    ]
                                }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d4af244bdc2d962f8b4571",
                    }
                ];
            } //Adding .338 LM RIP to the Sako TRG M10
            if (fileData._id === "627e14b21713922ded6f2c15") {
                fileData._props.Chambers = [
                    {
                        "_name": "patron_in_weapon",
                        "_id": "627e14b21713922ded6f2c1a",
                        "_parent": "627e14b21713922ded6f2c15",
                        "_props": {
                            "filters": [
                                {
                                    "Filter": [
                                        "5fc382a9d724d907e2077dab",
                                        "5fc275cf85fd526b824a571a",
                                        "5fc382c1016cce60e8341b20",
                                        "5fc382b6d6fa9c00c571bbc3",
                                        "68561ab84857b945e0ce85e9",
                                        "6859749fb61f50b920ae5a2a"
                                    ]
                                }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d4af244bdc2d962f8b4571",
                    }
                ];
            } //Adding .338 LM RIP to the AXMC
            if (fileData._id === "5fc22d7c187fea44d52eda44") {
                fileData._props.Chambers = [
                    {
                        "_name": "patron_in_weapon",
                        "_id": "5fc22d7c187fea44d52eda4b",
                        "_parent": "5fc22d7c187fea44d52eda44",
                        "_props": {
                            "filters": [
                                {
                                    "Filter": [
                                        "5fc382a9d724d907e2077dab",
                                        "5fc275cf85fd526b824a571a",
                                        "5fc382c1016cce60e8341b20",
                                        "5fc382b6d6fa9c00c571bbc3",
                                        "68561ab84857b945e0ce85e9",
                                        "6859749fb61f50b920ae5a2a"
                                    ]
                                }
                            ]
                        },
                        "_required": false,
                        "_mergeSlotWithChildren": false,
                        "_proto": "55d4af244bdc2d962f8b4571",
                    }
                ];
            } //Adding .338 LM RIP to the AXMC5c793fc42e221600114ca25d
            if (fileData._id === "616584766ef05c2ce828ef57") {
                fileData._props.Slots[0]._props.filters[0].Filter.push("6857c3a0b4fec9f18e5e5e36",
                    "685912a257837068f1460c7a");
            } //Pushing ROMEO7 to QRP2 Mount
            if (fileData._id === "5c7d55f52e221644f31bff6a") {
                fileData._props.Slots[0]._props.filters[0].Filter.push("6857c3a0b4fec9f18e5e5e36",
                    "685912a257837068f1460c7a");
            } //Pushing ROMEO7 to LRP Mount
            if (fileData._id === "5c7d560b2e22160bc12c6139") {
                fileData._props.Slots[0]._props.filters[0].Filter.push("6857c3a0b4fec9f18e5e5e36",
                    "685912a257837068f1460c7a");
            } //Pushing ROMEO7 to Aimpoint Standard Spacer
            if (fileData._id === "5c793fc42e221600114ca25d") {
                fileData._props.Accuracy = 0
            } //Nerfing the Anodized Red SI ARE Buffer - Accuracy Stat
            if (fileData._id === "5c793fc42e221600114ca25d") {
                fileData._props.Velocity = 0
            } //Nerfing the Anodized Red SI ARE Buffer - Velocity Stat
            if (fileData._id === "5fc22d7c187fea44d52eda44") {
                fileData._props.handbookPriceRoubles = 8700
            } //Nerfing the Anodized Red SI ARE Buffer - Handbook Value
            if (fileData._id === "5fc22d7c187fea44d52eda44") {
                fileData._props.fleaPriceRoubles = 43400
            } //Nerfing the Anodized Red SI ARE Buffer - Flea Market Value
            if (fileData._id === "5fc3e272f8b6a877a729eac5") {
                fileData._props.Slots[2]._props.filters[0].Filter.push("686d787fe69d3f3f9e3f5396");
            } //Pushing HK UMP Buffertube to HK UMP45
        }
    }
}
