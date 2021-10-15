<template>
    <div>
        <div class="page-header-title">
            <br />
            <h4 class="page-title">{{ $t("nav.Image") }}</h4>
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
                                            @click.prevent="newImage"
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
                                        ref="datatable-image"
                                    ></data-table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- vista de consulta-->
        <b-modal ref="view-image" size="md" title="Image">
            <div class="row">
                <div class="col-md-6">
                    <img :src="baseURL+'storage/documents/'+image.ImageUrl" style="width: 100%" />
                </div>
                <div class="col-md-6">
                    <h4>Tittle</h4>
                    <p class="text-muted">{{ image.Tittle }}</p>
                </div>
            </div>
            <template #modal-footer>
                <a @click.prevent="editImage" class="btn btn-warning">
                    <i class="fa fa-edit"></i>
                    {{ $t("actions.edit") }}
                </a>
                <a @click.prevent="deleteImage" class="btn btn-danger">
                    <i class="fa fa-trash"></i>
                    {{ $t("actions.destroy") }}
                </a>
            </template>
        </b-modal>
        <!-- vista de consulta-->
        <b-modal ref="frm-image" size="lg" title="Image">
            <form role="form">
                <div class="form-group">
                    <label for="Tittle">Tittle</label>
                    <input type="text" class="form-control" name="Tittle" v-model="image.Tittle" />
                    <ul
                        class="parsley-errors-list filled"
                        id="parsley-id-19"
                        v-if="errorBag.Tittle"
                    >
                        <li class="parsley-required">{{ errorBag.Tittle }}</li>
                    </ul>
                </div>
                <div class="form-group">
                    <label for="email">Fotografia</label>
                    <b-form-file
                        @change="loadFile('Fotografia')"
                        placeholder="Selecciona o suelta un Archivo..."
                        drop-placeholder="Suelta el Archivo aqui..."
                    ></b-form-file>
                    <span v-show="isLoadingFile" class="text-success">
                        <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                        Cargando Archivo
                        <span class="sr-only">Cargando...</span>
                    </span>
                    <span v-show="!isLoadingFile && image.ImageUrl" class="text-info">
                        <i class="fa fa-thumbs-o-up"></i> Archivo
                        Cargado!
                    </span>
                </div>
            </form>
            <template #modal-footer>
                <a @click.prevent="saveImage()" class="btn btn-success">
                    <i class="fa fa-save"></i>
                    {{ $t("actions.save") }}
                </a>
                <button type="button" class="btn btn-danger" @click.prevent="cancelImage()">
                    <i class="fa fa-window-close"></i>
                    {{ $t("actions.cancel") }}
                </button>
            </template>
        </b-modal>
    </div>
</template>

<script src="./Image.js"></script>
