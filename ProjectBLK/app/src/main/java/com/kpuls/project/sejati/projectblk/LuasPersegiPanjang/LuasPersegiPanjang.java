package com.kpuls.project.sejati.projectblk.LuasPersegiPanjang;

import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.text.TextUtils;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import com.kpuls.project.sejati.projectblk.R;

public class LuasPersegiPanjang extends AppCompatActivity {

    private EditText edtPanjang;
    private EditText edtLebar;
    private TextView edtLuas;
    private Button btnHitungLuas;
    private TextView keterangan;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_luas_persegi_panjang);
        edtPanjang = (EditText) findViewById(R.id.editTextPanjang);
        edtLebar = (EditText) findViewById(R.id.editTextLebar);
        edtLuas = (TextView) findViewById(R.id.editTextLuas);
        keterangan = (TextView) findViewById(R.id.Keterangan);
        btnHitungLuas = (Button) findViewById(R.id.buttonHitungLuas);
        btnHitungLuas.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                // HitungLuas();
                if (!TextUtils.isEmpty(edtPanjang.getText().toString()) &&!TextUtils.isEmpty(edtLebar.getText().toString())) {

                    int panjang = Integer.parseInt(edtPanjang.getText().toString());
                    int lebar = Integer.parseInt(edtLebar.getText().toString());
                    int luas = panjang * lebar;
                    edtLuas.setText(luas + "");
                    if (luas >= 100) {
                        keterangan.setText("Terlalu besar Kotak Perseginya...");
                    } else {
                        keterangan.setText("Ya, besar kotaknya sudah cukup...");
                    }
                }

            }
        });
        setToolbar();
    }
    private void setToolbar() {
        Toolbar toolbar =  findViewById(R.id.toolbar);
        //setSupportActionBar(toolbar);
        final ActionBar ab = getSupportActionBar();
        ab.setDisplayHomeAsUpEnabled(true);
        ab.setTitle("Luas Persegi Panjang");
    }
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {

        switch (item.getItemId()){
            case android.R.id.home :
                finish();
                break;
        }

        return true;
    }
}
