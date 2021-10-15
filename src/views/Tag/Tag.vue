<template>
    <div>
        <div class="page-header-title">
            <br />
            <h4 class="page-title">{{ $t("nav.Tag") }}</h4>
        </div>
        <div class="page-content-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <h6 class="card-title text-dark m-0">
                                    Detalle de Registros
                                    <div class="float-right">
                                        <button
                                            @click.prevent="newTag"
                                            class="btn btn-sm btn-success waves-effect waves-light m-l-10"
                                        >
                                            <i class="fa fa-plus"></i>
                                            {{ $t("actions.new") }}
                                        </button>
                                    </div>
                                </h6>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <data-table
                                        :columns="columns"
                                        :ajax="ajax"
                                        width="100%"
                                        @draw="draw"
                                        ref="datatable-tag"
                                    ></data-table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- vista de consulta-->
        <b-modal ref="view-tag" size="lg" title="Tag">
            <h4>{{ $t("nav.Label") }}</h4>
            <p class="text-muted">{{ tag.Label }}</p>
            <template #modal-footer>
                <a @click.prevent="editTag" class="btn btn-warning">
                    <i class="fa fa-edit"></i>
                    {{ $t("actions.edit") }}
                </a>
                <a
                    @click.prevent="deleteTag"
                    class="btn btn-danger"
                >
                    <i class="fa fa-trash"></i>
                    {{ $t("actions.destroy") }}
                </a>
            </template>
        </b-modal>
        <!-- vista de consulta-->
        <b-modal ref="frm-tag" size="lg" title="Tag">
            <form role="form">
                <div class="form-group">
                    <label for="Label">Label</label>
                    <input
                        type="text"
                        class="form-control"
                        name="Label"
                        v-model="tag.Label"
                    />
                    <ul
                        class="parsley-errors-list filled"
                        id="parsley-id-19"
                        v-if="errorBag.Label"
                    >
                        <li class="parsley-required">{{ errorBag.Label }}</li>
                    </ul>
                </div>
            </form>
            <template #modal-footer>
                <a
                    @click.prevent="saveTag()"
                    class="btn btn-success"
                >
                    <i class="fa fa-save"></i>
                    {{ $t("actions.save") }}
                </a>
                <button
                    type="button"
                    class="btn btn-danger"
                    @click.prevent="cancelTag()"
                >
                    <i class="fa fa-window-close"></i>
                    {{ $t("actions.cancel") }}
                </button>
            </template>
        </b-modal>
    </div>
</template>

<script src="./Tag.js"></script>
