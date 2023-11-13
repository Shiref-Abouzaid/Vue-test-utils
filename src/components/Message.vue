<template>
    <div>
        <h1> {{ msg }}</h1>


        <div v-for="store in jsonData.data" :key="store.id">
            <div>{{ store.attributes.name }}</div>
         
            <img v-for="media in store.relationships.media.data" :src="mediaUrls[media.id]" alt="media url" :key="media.id">
        </div>
    </div>
</template>
<script >
export default {
    name: 'messageComponent',
    data() {
        return {
            jsonData: {
                "jsonapi": {
                    "version": "1.0"
                },
                "data": [
                    {
                        "type": "stores",
                        "id": "1517",
                        "attributes": {
                            "name": "namshi",
                            "brief": "Your No.1 fashion & beauty destiation in GCC",
                            "order": 1,
                            "url": "https://www.namshi.com/saudi-ar/women/for-you/",
                            "created_at": "2023-11-06T11:04:54.000000Z",
                            "is_active": 1,
                            "followers_count": 0,
                            "coupons_count": 1,
                            "is_following": false,
                            "has_successful_coupons": false,
                            "categories_names": []
                        },
                        "relationships": {
                            "media": {
                                "data": [
                                    {
                                        "type": "media",
                                        "id": "1824"
                                    },
                                    {
                                        "type": "media",
                                        "id": "1825"
                                    }
                                ]
                            },
                            "coupons": {
                                "data": [
                                    {
                                        "type": "coupons",
                                        "id": "58893"
                                    }
                                ]
                            }
                        }
                    }
                ],
                "included": [
                    {
                        "type": "media",
                        "id": "1824",
                        "attributes": {
                            "collection_name": "logo",
                            "url": "https://sahseh-staging.s3.me-south-1.amazonaws.com/Store/1824/store_1623239358.png"
                        },
                        "links": {
                            "self": "https://nextgen.sahseh.co/api/v1/media/1824"
                        }
                    },
                    {
                        "type": "media",
                        "id": "1825",
                        "attributes": {
                            "collection_name": "cover",
                            "url": "https://sahseh-staging.s3.me-south-1.amazonaws.com/Store/1825/namshi.png"
                        },
                        "links": {
                            "self": "https://nextgen.sahseh.co/api/v1/media/1825"
                        }
                    },
                    {
                        "type": "coupons",
                        "id": "58893",
                        "attributes": {
                            "name": "FR43D2",
                            "order": 2,
                            "code": null,
                            "url": "https://www.namshi.com/saudi-ar/women/promo-edit-3/",
                            "discount_description": "discount up to 70%",
                            "discount_value": 70,
                            "last_usage": null,
                            "approved_at": "2023-11-06T11:19:15.000000Z",
                            "coupon_usage_count": 0
                        }
                    }
                ]
            },
            coponsUrls:{},
            mediaUrls:{}
        }
        
    },
    props: {
        msg: String,
    },
    created() {
        this.jsonData.included.forEach(item=>{
            if(item.type == 'media') {
                this.mediaUrls[item.id] = item.attributes.url;
            } else if (item.type == 'coupons') {
                this.coponsUrls[item.id] = item.attributes.url
            }
        })
    }

}
//const props = defineProps(['msg'])
</script>