<template>
    <v-list nav dense>
        <v-list-item-group>
            <router-link
                class="black--text text--accent-4"
                to="Tag"
                active-class="blue--text text--accent-4"
            >
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-tag</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{
                            $t("nav.Tag")
                        }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </router-link>

            <router-link
                class="black--text text--accent-4"
                to="Image"
                active-class="blue--text text--accent-4"
            >
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-image</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{
                            $t("nav.Image")
                        }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </router-link>

        </v-list-item-group>
    </v-list>
</template>

<script>
export default {
    name: "MenuVuetify",
    data() {
        return {
            msg: "MenuVuetify",
        };
    },
};
</script>