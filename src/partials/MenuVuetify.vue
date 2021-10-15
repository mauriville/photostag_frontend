<template>
    <v-list nav dense>
        <v-list-item-group>
            <router-link
                class="black--text text--accent-4"
                to="Persona"
                active-class="blue--text text--accent-4"
            >
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{
                            $t("nav.Persona")
                        }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </router-link>

            <router-link
                class="black--text text--accent-4"
                to="Usuario"
                active-class="blue--text text--accent-4"
            >
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-account-multiple</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{
                            $t("nav.Usuario")
                        }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </router-link>

            <router-link
                class="black--text text--accent-4"
                to="Profile"
                active-class="blue--text text--accent-4"
            >
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-account-circle</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{
                            $t("nav.Profile")
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